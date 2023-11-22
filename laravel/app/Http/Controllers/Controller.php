<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Models\User;

class Controller extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;

    //Route::get('users', [UserController::class, 'index']);
    public function index()
     {
        //GET ALL
         try {
         } catch (\Exception $exception) {
             return response()->json(['error' => $exception->getMessage()]);
         }
     }

    //Route::post('user',[Controller::class,'store']);
     public function store(Request $request)
     {
        //CREATE
         $fields = $request->validate(([
             'name' => 'required',
             'email' => 'required|email',
             'password' => 'required',
         ]));

         try {
             DB::beginTransaction();
             $user = User::create([
                 'name' => $fields['name'],
                 'email' => $fields['email'],
                 'password' => $fields['password'],
             ]);
             DB::commit();
             return response()->json($user);
         } catch (\Exception $exception) {
             DB::rollBack();
             return response()->json(['error' => $exception->getMessage()]);
         }
     }

    //Route::put('user/{id}',[Controller::class,'update']);
    public function update(Request $request, $id)
     {
        //UPDATE
         $fields = $request->validate(([
             'name' => 'required',
             'email' => 'required|email',
         ]));

         try {
             DB::beginTransaction();
             $user = User::find($id);
             $user->update([
                 'name' => $fields['name'],
                 'email' => $fields['email'],
             ]);
             DB::commit();
             return response()->json($user);
         } catch (\Exception $exception) {
             DB::rollBack();
             return response()->json(['error' => $exception->getMessage()]);
         }
     }

    //Route::delete('user/{id}',[Controller::class,'destroy']);
    public function destroy($id)
     {
         try {
             DB::beginTransaction();
             $user = User::find($id);
             $user->delete();
             DB::commit();
             return response()->json($user);
         } catch (\Exception $exception) {
             DB::rollBack();
             return response()->json(['error' => $exception->getMessage()]);
         }
     }
 }
