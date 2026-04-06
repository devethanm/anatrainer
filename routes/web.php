<?php

use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;
use App\Http\Controllers\AppController;

Route::get('/', [AppController::class, 'index'])->name('index');


require __DIR__.'/settings.php';