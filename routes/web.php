<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
    //Mes routes

    

use App\Http\Controllers\ContactController;
use App\Http\Controllers\FaqsController;
use App\Http\Controllers\HistoryController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ReservationController;
use App\Http\Controllers\SubscribeController;

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/history', [HistoryController::class, 'index'])->name('history');
Route::get('/contact', [ContactController::class, 'index'])->name('contact');
Route::post('/contact', [ContactController::class, 'store']);
Route::get('/faqs', [FaqsController::class, 'index'])->name('faqs');
Route::get('/dashboard', function () {
    return inertia('Dash', [
        'auth' => auth()->user() ? [
            'user' => auth()->user()->only('id', 'name', 'email', 'role')
        ] : ['user' => null],
        'errors' => session()->get('errors') ? session()->get('errors')->getBag('default')->getMessages() : [],
    ]);
})->middleware(['auth', 'verified'])->name('dashboard');
Route::get('/about', function () {
    return inertia('About');
})->name('about');
Route::post('/subscribe', [SubscribeController::class, 'store'])->name('subscribe.store');
Route::get('/reservation', [ReservationController::class, 'index'])->middleware(['auth'])->name('reservation');
Route::get('/ticket/download', [ReservationController::class, 'downloadTicket'])->middleware(['auth'])->name('ticket.download');

require __DIR__ . '/auth.php';