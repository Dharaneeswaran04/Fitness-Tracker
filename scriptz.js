document.getElementById('workout-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    // Collect input values
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const goal = document.getElementById('goal').value;

    // Generate workout plan based on user input
    let plan = `<p><strong>Your plan for a ${age}-year-old ${gender} with the goal of ${goal}:</strong></p><br>`;

    if (age < 8) {
        plan = `<p><strong>Grow up, little warrior! 🍼 You're too young for a workout plan right now.</strong></p>`;
    } else if (age > 100) {
        plan = `<p><strong>There are no workout plans for ghosts 👻</strong></p>`;
    } else if (age > 80) {
        plan = `<p><strong>Take rest, Spartan! 🛌 Your body needs more relaxation at this stage.</strong></p>`;
    } else if (age >= 60 && age <= 80) {
        plan = `<p><strong>A realistic workout plan for you includes gentle exercises like walking, yoga, and light stretching. Focus on mobility and maintaining flexibility.</strong></p>`;
    } else {
        if (goal === 'weight-loss') {
            if (gender === 'male') {
                plan += `<h3>Cardio (30-45 minutes):</h3><p>Running, cycling, or HIIT to burn calories and improve cardiovascular fitness.</p>`;
                plan += `<h3>Strength Training (20 minutes):</h3><p>Squats and push-ups to build lean muscle mass.</p>`;
            } else if (gender === 'female') {
                plan += `<h3>Cardio (30-45 minutes):</h3><p>Dance, cycling, or brisk walking to burn calories while enjoying the workout.</p>`;
                plan += `<h3>Strength Training (20 minutes):</h3><p>Bodyweight exercises like squats and lunges to tone muscles.</p>`;
            }
            plan += `<h3>Core Exercises:</h3><ul>
                        <li><strong>Planks:</strong> Hold a push-up position to strengthen the core.</li>
                        <li><strong>Russian Twists:</strong> Engage the obliques.</li>
                    </ul>`;
        } else if (goal === 'muscle-gain') {
            if (gender === 'male') {
                plan += `<h3>Strength Training (45-60 minutes):</h3><p>Focus on heavy lifts like squats, deadlifts, and bench presses.</p>`;
            } else if (gender === 'female') {
                plan += `<h3>Strength Training (45-60 minutes):</h3><p>Focus on exercises that target the glutes, legs, and upper body, such as squats, lunges, and shoulder presses.</p>`;
            }
            plan += `<h3>Core Exercises:</h3><ul>
                        <li><strong>Leg Raises:</strong> Strengthen the lower abs.</li>
                        <li><strong>Planks:</strong> Engage the entire core.</li>
                    </ul>`;
        } else if (goal === 'endurance') {
            plan += `<h3>Cardio (40-60 minutes):</h3><p>Running, cycling, or swimming to build aerobic capacity and stamina.</p>`;
            if (gender === 'female') {
                plan += `<h3>Low-Impact Cardio:</h3><p>Try power walking or swimming for sustained stamina.</p>`;
            }
        }
    }

    // Display the generated plan
    const planDetails = document.getElementById('plan-details');
    planDetails.innerHTML = plan; // Insert HTML with proper tags

    // Make the workout plan section visible
    const workoutPlanSection = document.getElementById('workout-plan');
    workoutPlanSection.classList.remove('hidden');
});
