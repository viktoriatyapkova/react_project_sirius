# Личный кабинет читателя

## Описание проекта
"Личный кабинет читателя" — это веб-приложение для пользователей книжного онлайн-сервиса, предоставляющее доступ к выбору книг, отслеживанию новинок и управлению личной библиотекой. Приложение включает авторизацию, просмотр каталога книг, страницы с детальным описанием книг и профиль пользователя с историей прочитанных книг.

---
## Структура проекта
```
lk.sirius.react-project/
├── public/                     # Публичная часть
│
├── src/                        # Рабочая область проекта
│   ├── components/             # Компоненты React
│   ├── layouts/                # Компоненты шаблонов страниц
│   ├── pages/                  # Компоненты страниц проекта
│   ├── store/                  # Модули для работы с состоянием
│
├── package.json                # Зависимости и скрипты проекта
└──  README.md                   # Документация проекта
```
## Функциональность

### Страницы приложения
1. **Главная страница (`/`)**
   - Лента новостей и событий книжного мира.
   - Разделы: «Новые поступления», «Книги месяца», «Лучшие книги года».

2. **Авторизация (`/login`)**
   - Форма ввода email и пароля с валидацией.
   - Перенаправление на главную страницу после успешного входа.

3. **Список книг (`/books`)**
   - Список книг в виде карточек с информацией:
     - Обложка, название, описание.
     - Кнопки добавления в «Избранное» или «Прочитано».

4. **Детальная информация о книге (`/books/:id`)**
   - Полное описание книги:
     - Аннотация, автор, жанр, рейтинг, рецензии.
     - Возможность добавления книги в списки.

5. **Профиль пользователя (`/user/:id`)**
   - Информация о пользователе: имя, фамилия, аватар.
   - Списки прочитанных, желаемых и избранных книг.
   - Редактирование профиля.

6. **404 страница (`/404`)**
   - Сообщение об ошибке при переходе на несуществующую страницу.

---

### Основные функции
1. Авторизация и защита страниц, доступных только авторизованным пользователям.
2. Лента новостей с актуальной информацией о книжном мире.
3. Управление книгами:
   - Просмотр списка книг.
   - Добавление в избранные или прочитанные.
4. Персонализация профиля пользователя.

---

## API Методы

- **Авторизация**
  - `POST /auth/login` — вход пользователя, получение токена.
  - `GET /auth/me` — информация о текущем пользователе.

- **Пользователи**
  - `GET /users` — список пользователей.

- **Книги**
  - `GET /books` — список всех книг.
  - `GET /books/:id` — информация о конкретной книге.

- **Главная**
  - `GET /main` — новости и события.

---

## Технологии

### Frontend
- **React** — для построения интерфейса.
- **React Router** — для маршрутизации страниц.
- **consta.design** — для удобного и современного UI.

### Управление состоянием
- **Redux** — для централизованного управления состоянием.

### Дополнительные инструменты
- **ESLint** — для проверки качества кода.
- Адаптивный дизайн для поддержки всех устройств.

---
