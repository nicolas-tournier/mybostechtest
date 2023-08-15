<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CaseObj extends Model
{
    use HasFactory;

    protected $fillable = [
        'case_number',
        'date_added',
        'due_date',
        'subject',
        'description',
        'notes',
        'type',
        'contractor',
        'priority',
        'job_area',
        'apartment',
        'status'
    ];

}
