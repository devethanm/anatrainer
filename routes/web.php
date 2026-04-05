<?php

use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;



Route::inertia('/', 'index', [])->name('index');



require __DIR__.'/settings.php';