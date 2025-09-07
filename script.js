document.addEventListener('DOMContentLoaded', function() {
    // Set current date
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('current-date').textContent = now.toLocaleDateString('en-US', options);

    // Motivational quotes
    const quotes = [
        "The secret of getting ahead is getting started. - Mark Twain",
        "You don't have to be great to start, but you have to start to be great. - Zig Ziglar",
        "The expert in anything was once a beginner. - Helen Hayes",
        "Success is the sum of small efforts, repeated day in and day out. - Robert Collier",
        "The future depends on what you do today. - Mahatma Gandhi",
        "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
        "Believe you can and you're halfway there. - Theodore Roosevelt"
    ];

    // Set random quote
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('daily-quote').textContent = randomQuote;

    const cardsData = [
        {
            title: '🌅 Morning Routine',
            time: '6:00 AM - 8:00 AM',
            tasks: [
                { id: 'task1', label: 'Wake up at 6:00 AM (No snooze!)' },
                { id: 'task2', label: 'Drink a glass of water' },
                { id: 'task3', label: 'Brush teeth & skincare routine' },
                { id: 'task4', label: '10-minute stretch/yoga/light exercise' },
                { id: 'task5', label: 'Healthy breakfast' },
                { id: 'task6', label: "Review today's schedule & prioritize tasks" },
                { id: 'task7', label: 'Pack bag (books, laptop, notes, water bottle)' }
            ]
        },
        {
            title: '📚 Academic Tasks',
            time: '8:00 AM - 5:00 PM',
            tasks: [
                { id: 'task8', label: 'Attend Class at <input type="time" class="time-input rounded">' },
                { id: 'task9', label: 'Review lecture notes within 1 hour after class' },
                { id: 'task10', label: 'Complete urgent assignments' },
                { id: 'task11', label: 'Study for upcoming exams' },
                { id: 'task12', label: 'Work on group projects' }
            ]
        },
        {
            title: '💪 Personal Development',
            tasks: [
                { id: 'task16', label: 'Work on a hobby (coding, art, music)' },
                { id: 'task17', label: 'Read a non-academic book (10+ pages)' },
                { id: 'task18', label: 'Practice a skill (language, public speaking)' },
                { id: 'task19', label: 'Club/team meeting (if applicable)' }
            ]
        },
        {
            title: '🏃‍♂️ Health & Wellness',
            tasks: [
                { id: 'task20', label: '30-minute workout/gym/yoga session' },
                { id: 'task21', label: 'Meditate/deep breathing (5-10 mins)' },
                { id: 'task22', label: 'Avoid junk food (stick to meal plan)' }
            ]
        },
        {
            title: '🌙 Evening Wind-Down',
            time: '8:00 PM - 10:30 PM',
            tasks: [
                { id: 'task23', label: 'Dinner (balanced meal)' },
                { id: 'task24', label: "Plan tomorrow's to-do list" },
                { id: 'task25', label: 'Organize workspace/desk' },
                { id: 'task26', label: 'Relax (watch a show, call family/friends)' },
                { id: 'task27', label: 'Shower & skincare routine' },
                { id: 'task28', label: 'Prepare clothes & bag for tomorrow' },
                { id: 'task29', label: 'Lights out by 10:30 PM' }
            ]
        },
        {
            title: '🎯 Weekly Goals',
            tasks: [
                { id: 'goal1', label: 'Finish <input type="text" placeholder="Project name" class="rounded p-1"> by <input type="date" class="rounded p-1">' },
                { id: 'goal2', label: 'Exercise 4x this week' },
                { id: 'goal3', label: 'No procrastination on assignments!' }
            ]
        }
    ];

    const dashboardGrid = document.getElementById('dashboard-grid');
    let totalTasks = 0;

    cardsData.forEach(cardData => {
        const card = document.createElement('div');
        card.className = 'card';
        let tasksHtml = '<ul class="list-none p-0">';
        cardData.tasks.forEach(task => {
            tasksHtml += `
                <li class="task-item">
                    <input type="checkbox" class="task-checkbox" id="${task.id}">
                    <label for="${task.id}" class="task-label">${task.label}</label>
                </li>`;
            totalTasks++;
        });
        tasksHtml += '</ul>';

        card.innerHTML = `
            <h2 class="text-xl font-bold">${cardData.title}</h2>
            ${cardData.time ? `<p class="text-sm text-gray-400">${cardData.time}</p>` : ''}
            ${tasksHtml}
        `;
        dashboardGrid.appendChild(card);
    });

    document.getElementById('total-count').textContent = totalTasks;

    const checkboxes = document.querySelectorAll('.task-checkbox');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateProgress);
    });

    function updateProgress() {
        const completed = document.querySelectorAll('.task-checkbox:checked').length;
        document.getElementById('completed-count').textContent = completed;

        const percentage = (completed / totalTasks) * 100;
        const progressFill = document.getElementById('progress-fill');
        progressFill.style.width = percentage + '%';
        progressFill.setAttribute('aria-valuenow', percentage);


        const label = this.nextElementSibling;
        if (this.checked) {
            label.classList.add('completed');
        } else {
            label.classList.remove('completed');
        }
    }

    // Add win button
    document.getElementById('add-win').addEventListener('click', addWin);

    function addWin() {
        const winInput = document.getElementById('new-win');
        const winText = winInput.value.trim();

        if (winText) {
            const winsList = document.getElementById('wins-list');
            const newWin = document.createElement('li');
            newWin.textContent = winText;
            winsList.insertBefore(newWin, winsList.lastElementChild);
            winInput.value = '';
        }
    }

    // Save notes button
    document.getElementById('save-notes').addEventListener('click', saveNotes);
    
    function saveNotes() {
        alert('Notes saved!');
    }
});
