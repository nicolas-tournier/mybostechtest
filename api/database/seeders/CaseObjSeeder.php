<?php

namespace Database\Seeders;

use App\Models\CaseObj;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CaseObjSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        CaseObj::factory()
            ->count(100)
            ->create();
    }
}
