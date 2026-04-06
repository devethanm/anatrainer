<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class AppController extends Controller
{
    public function index()
    {
        $firstCharacter = "が";

        return Inertia::render('index', [
            'character' => $firstCharacter,
        ]);
    }
}