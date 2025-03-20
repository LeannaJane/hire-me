<?php

use App\Http\Controllers\LoginController;
use App\Http\Controllers\RegisterController;
use Illuminate\Support\Facades\Route;

Route::get("/login", [LoginController::class, "view"]);

Route::get("/register", [RegisterController::class, "view"]);
