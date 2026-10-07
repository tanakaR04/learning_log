'use strict';

/*
  ========================================
  MyTodoApp — DOM 操作の教科書
  ========================================
  覚える流れ:
  1. データ(todos) を持つ
  2. DOM に要素を作って差し込む（render）
  3. イベントでデータを変える
  4. 必要なら DOM も自分で更新する

  React との最大の違い:
  「データ」と「画面」を両方自分で同期する必要がある。
*/

{
  // ----------------------------------------
  // 1. データの読み込み（localStorage）
  // ----------------------------------------
  // localStorage はブラウザに残る文字列専用の倉庫。
  // オブジェクトはそのまま入れられない → JSON.stringify / JSON.parse が必要。
  let todos;

  if (localStorage.getItem('todos') === null) {
    // 初回起動: まだ何も保存されていない
    todos = [];
  } else {
    // 保存済みの JSON 文字列 → 配列に戻す
    todos = JSON.parse(localStorage.getItem('todos'));
  }

  // データを保存する共通処理
  const saveTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  // ----------------------------------------
  // 2. 1件分の ToDo を DOM に描画する
  // ----------------------------------------
  // 完成形の木構造:
  //   li
  //    ├─ label
  //    │    ├─ input (checkbox)
  //    │    └─ span  (タイトル)
  //    └─ button (削除)
  const renderTodo = (todo) => {
    // --- checkbox ---
    const input = document.createElement('input'); // DOM 要素を新規作成
    input.type = 'checkbox';
    input.checked = todo.isCompleted;

    // チェックが変わったら「データ」だけ更新（見た目はブラウザが自動で変える）
    input.addEventListener('change', () => {
      todos.forEach((item) => {
        if (item.id === todo.id) {
          item.isCompleted = !item.isCompleted;
        }
      });
      saveTodos();
    });

    // --- タイトル表示 ---
    const span = document.createElement('span');
    span.textContent = todo.title; // テキストを入れる（HTML ではなく文字列）

    // --- label に checkbox と span を子として追加 ---
    const label = document.createElement('label');
    label.appendChild(input); // 木の親子関係を作る
    label.appendChild(span);

    // --- 削除ボタン ---
    const button = document.createElement('button');
    button.textContent = 'x';
    button.addEventListener('click', () => {
      if (!confirm('Sure?')) {
        return;
      }

      // 画面から消す（DOM 操作）
      li.remove();

      // データからも消す（filter は「条件に合うものだけ残す」）
      todos = todos.filter((item) => {
        return item.id !== todo.id;
      });
      saveTodos();
    });

    // --- li を組み立てて、既存の #todos にぶら下げる ---
    const li = document.createElement('li');
    li.appendChild(label);
    li.appendChild(button);

    // document.querySelector = DOM の中から要素を探す
    document.querySelector('#todos').appendChild(li);
  };

  // 配列の全件を描画
  const renderTodos = () => {
    todos.forEach((todo) => {
      renderTodo(todo);
    });
  };

  // ----------------------------------------
  // 3. 追加フォーム
  // ----------------------------------------
  document.querySelector('#add-form').addEventListener('submit', (e) => {
    // form のデフォルト動作（ページリロード）を止める
    e.preventDefault();

    const input = document.querySelector('#add-form input');

    // 新しい ToDo オブジェクトを作る
    const todo = {
      id: Date.now(), // ざっくり一意な ID（ミリ秒）
      title: input.value,
      isCompleted: false,
    };

    // 画面に足す → データに足す → 保存
    // ※順番を間違えると「画面だけある」「データだけある」が起きる
    renderTodo(todo);
    todos.push(todo);
    saveTodos();

    input.value = '';
    input.focus(); // 続けて入力しやすいようにフォーカスを戻す
  });

  // ----------------------------------------
  // 4. Purge（完了済みを一括削除）
  // ----------------------------------------
  document.querySelector('#purge').addEventListener('click', () => {
    if (!confirm('Sure?')) {
      return;
    }

    // 未完了だけ残す
    todos = todos.filter((todo) => {
      return todo.isCompleted === false;
    });
    saveTodos();

    // DOM 側も全部消して、残ったデータで描き直す
    // （素の DOM では「データ変更 → 自動再描画」がないので手動）
    document.querySelectorAll('#todos li').forEach((li) => {
      li.remove();
    });
    renderTodos();
  });

  // ----------------------------------------
  // 5. 起動時: 保存データを画面に出す
  // ----------------------------------------
  renderTodos();
}
