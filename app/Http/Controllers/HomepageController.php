<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class HomepageController extends Controller
{
    public function displayHomepage() {
        return Inertia::render('Homepage');
    }
}
