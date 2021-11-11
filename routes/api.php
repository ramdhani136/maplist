<?php

use App\Http\Controllers\AreaController;
use App\Http\Controllers\LocationController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::resource('/locations', LocationController::class);
Route::resource('/area', AreaController::class);
Route::resource('/editLocation', AreaController::class);
Route::post('/editLocation/{id}', [LocationController::class, 'Onupdate']);
