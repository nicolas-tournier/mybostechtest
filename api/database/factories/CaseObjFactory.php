<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\CaseObj>
 */
class CaseObjFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $cats = ['Repair', 'Replacement', 'Gardening', 'upgrade'];
        $prios = ['low', 'medium', 'high', 'urgent'];
        $areas = ['public', 'private', 'na'];
        $statuses = ['new', 'in progress', 'completed', 'deleted'];

        return [
            'case_number'           => '#' . fake()->unique()->randomNumber(4, true),
            'date_added'            => fake()->dateTimeThisMonth(),
            'due_date'              => fake()->dateTimeThisMonth('+30 days'),
            'reporter'              => fake()->name(),
            'subject'               => fake()->words(4, true),
            'description'           => fake()->paragraph(),
            'notes'                 => fake()->paragraph(),
            'category'              => $cats[rand(0, 3)],
            'contractor'            => fake()->company(),
            'contractor_contact'    => fake()->name(),
            'priority'              => $prios[rand(0, 3)],
            'job_area'              => $areas[rand(0, 2)],
            'apartment'             => fake()->unique()->randomNumber(3, true),
            'status'                => $statuses[rand(0, 3)]
        ];
    }
}
