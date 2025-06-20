<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('reservations', function (Blueprint $table) {
            //
            $table->integer('passenger_phone');
            $table->string('passenger_email');
            $table->string('passenger_name');
            $table->string('seat_number', 10)->nullable()->after('passenger_phone');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('servations', function (Blueprint $table) {
            //
        });
    }
};
