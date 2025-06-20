<?php

namespace App\Http\Controllers;

use App\Models\Agency;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $agencies = Agency::all(['id', 'name', 'address', 'logo']);
        return Inertia::render('Home', [
            'agencies' => $agencies,
        ]);
    }
}
?>