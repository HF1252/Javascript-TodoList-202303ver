window.addEventListener('load', () => {
    const form = document.querySelector('#new-task-form');
    const input = document.querySelector('#new-task-input');
    const list_el = document.querySelector('#tasks');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const task = input.value;

        // 入力フォームが空の状態でAdd押下後、アラートが表示
        if (!task) {
            alert('Please fill out the task');
            return;
        }

        // 指定したtaskクラスを追加
        const task_el = document.createElement('div');
        task_el.classList.add('task');

        // 指定したcontentクラスを追加
        const task_content_el = document.createElement('div');
        task_content_el.classList.add('content');
        // task_content_el.innerText = task;

        // appendChildメソッドで指定要素を後ろへ追加
        task_el.appendChild(task_content_el);

        const task_input_el = document.createElement('input');
        task_input_el.classList.add('text');
        task_input_el.type = 'text';
        task_input_el.value = task;
        task_input_el.setAttribute('readonly', 'readonly');

        // appendChildメソッドで指定要素を後ろへ追加
        task_content_el.appendChild(task_input_el);

        // 指定したactionsクラスを追加
        const task_actions_el = document.createElement('div');
        task_actions_el.classList.add('actions');

        // 指定したeditクラスを表示
        const task_edit_el = document.createElement('button');
        task_edit_el.classList.add('edit');
        task_edit_el.innerText = 'Edit';

        // 指定したdeleteクラスを表示
        const task_delete_el = document.createElement('button');
        task_delete_el.classList.add('delete');
        task_delete_el.innerText = 'Delete';

        // appendChildメソッドで指定要素を後ろへ追加
        task_actions_el.appendChild(task_edit_el);
        task_actions_el.appendChild(task_delete_el);

        // appendChildメソッドで指定要素を後ろへ追加
        task_el.appendChild(task_actions_el);

        // appendChildメソッドで指定要素を後ろへ追加
        list_el.appendChild(task_el);

        input.value = '';

        // クリック後Save⇆Edit切り替わる
        task_edit_el.addEventListener('click', () => {
            if (task_edit_el.innerText.toLocaleLowerCase() == 'edit') {
                task_input_el.removeAttribute('readonly');
                task_input_el.focus();
                task_edit_el.innerText = 'Save';
            } else {
                // console.log('Save');
                task_input_el.setAttribute('readonly', 'readonly');
                task_edit_el.innerText = 'Edit';
            }
        });

        // Deleteクリック後削除される
        task_delete_el.addEventListener('click', () => {
            list_el.removeChild(task_el);
        });
    });
});
