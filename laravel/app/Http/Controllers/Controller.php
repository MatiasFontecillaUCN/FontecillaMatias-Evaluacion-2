<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Models\producto;

class Controller extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;

    //Route::get('producto', [UserController::class, 'index']);
    public function index()
     {
        //GET ALL
         try {
            return response()->json(producto::get(), 200);
         } catch (\Exception $exception) {
             return response()->json(['error' => $exception->getMessage()]);
         }
     }

    //Route::post('producto',[Controller::class,'store']);
     public function store(Request $request)
     {
        //CREATE
         $fields = $request->validate(([
             'name' => 'required',
             'price' => 'required|integer',
             'summary' => 'required',
             'img_url'=>'required',
            ]));

            // return response()->json('------------------------');
         try {
             DB::beginTransaction();
             $producto = producto::create([
                 'name' => $fields['name'],
                 'price' => $fields['price'],
                 'summary' => $fields['summary'],
                 'img_url'=>$fields['img_url'],

             ]);
             DB::commit();
             return response()->json($producto);
         } catch (\Exception $exception) {
             DB::rollBack();
             return response()->json(['error' => $exception->getMessage()]);
         }
     }

    //Route::put('producto/{id}',[Controller::class,'update']);
    public function update(Request $request, $id)
     {
        //UPDATE
         $fields = $request->validate(([
            'name' => 'required',
            'price' => 'required|integer',
            'summary' => 'required',
             'img_url'=>'required',
         ]));

         try {
             DB::beginTransaction();
             $producto = producto::find($id);
             $producto->update([
                'name' => $fields['name'],
                'price' => $fields['price'],
                'summary' => $fields['summary'],
                'img_url'=>$fields['img_url'],
             ]);
             DB::commit();
             return response()->json($producto);
         } catch (\Exception $exception) {
             DB::rollBack();
             return response()->json(['error' => $exception->getMessage()]);
         }
     }

    //Route::delete('producto/{id}',[Controller::class,'destroy']);
    public function destroy($id)
     {
         try {
             DB::beginTransaction();
             $producto = producto::find($id);
             $producto->delete();
             DB::commit();
             return response()->json($producto);
         } catch (\Exception $exception) {
             DB::rollBack();
             return response()->json(['error' => $exception->getMessage()]);
         }
     }
 }
