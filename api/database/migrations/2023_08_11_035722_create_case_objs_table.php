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
        Schema::create('case_objs', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('case_number');
            $table->date('date_added');
            $table->date('due_date');
            $table->string('reporter');
            $table->string('subject');
            $table->string('description');
            $table->string('notes');
            $table->string('category');
            $table->string('contractor');
            $table->string('contractor_contact');
            $table->string('priority');
            $table->string('job_area');
            $table->string('apartment');
            $table->string('status');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('case_objs');
    }
};
