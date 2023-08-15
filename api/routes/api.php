<?php

use App\Models\CaseObj;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::get('/cases', function (Request $request) {
    $perPage = (int) $request->per_page ?? null;
    return CaseObj::paginate($perPage)->withQueryString();
});

Route::get('/cases/{id}', function (Request $request, int $id) {
    try {
        $resource = CaseObj::findorfail($id);
    } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
        return response([
            'status' => 'ERROR',
            'error' => '404 not found'
        ], 404);
    }

    return ['data' => $resource->toArray()];
});
