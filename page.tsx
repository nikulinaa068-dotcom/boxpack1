export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-black">

    {/* Шапка */}
      <header className="bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-3 sm:flex-row">
          <p className="text-xl font-bold text-[#1b2c53]">BOXPACK</p>
          <nav className="flex flex-wrap justify-center gap-4 text-xs">
            <a href="#services">Услуги</a>
            <a href="#steps">Как это работает</a>
            <a href="#video">Видеофиксация</a>
            <a href="#calculator">Калькулятор</a>
            <a href="#cases">Кейсы</a>
            <a href="#contacts">Контакты</a>
          </nav>
        </div>
      </header>

      {/* Первый экран */}
      <section className="bg-[#1b2c53] px-5 py-12 text-white sm:py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-2">
          <div>
            <p className="mb-4 text-[11px]">Автоматизированный фулфилмент</p>
            <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
              Фулфилмент,<br />
              который держит<br />
              сроки и репутацию
            </h1>
            <p className="mt-4 max-w-md text-xs leading-4">
              Автоматизированная упаковка, видеоконтроль каждого заказа и
              отправка в день поступления. Мы берем на себя хранение, сборку,
              маркировку и логистику.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-5 text-xs">
              <a href="#calculator" className="font-bold">Рассчитать стоимость →</a>
              <a href="#contacts" className="rounded border border-white px-3 py-2">
                Получить консультацию
              </a>
            </div>

            {/* Три карточки с цифрами */}
            <div className="mt-8 grid max-w-md grid-cols-3 gap-3">
              <div className="rounded-md bg-[#304269] p-3">
                <p className="text-lg">▣</p>
                <p className="text-sm font-bold">5000+</p>
                <p className="text-[9px] text-gray-300">заказов в день</p>
              </div>
              <div className="rounded-md bg-[#304269] p-3">
                <p className="text-lg">⬟</p>
                <p className="text-sm font-bold">99.8%</p>
                <p className="text-[9px] text-gray-300">точность сборки</p>
              </div>
              <div className="rounded-md bg-[#304269] p-3">
                <p className="text-lg">▰</p>
                <p className="text-sm font-bold">FBO/FBS</p>
                <p className="text-[9px] text-gray-300">все маркетплейсы</p>
              </div>
            </div>
          </div>

          {/* Место для видео */}
          <div id="video" className="flex h-40 items-center justify-center rounded-md bg-[#d1d4dc] text-center text-[10px] text-black sm:h-52">
            Видео автоматической упаковочной линии
          </div>
        </div>
      </section>

      {/* Как начать работать с нами */}
      <section id="steps" className="px-5 py-12">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 text-center">
            <h2 className="text-xl font-bold">Как начать работать с нами</h2>
            <p className="mt-2 text-xs">
              Подключение занимает всего несколько дней. Все процессы максимально<br className="hidden sm:block" />
              автоматизированы.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border-t-4 border-[#d9d9d9] bg-[#f0f0f0] p-4 shadow-md">
              <p className="text-[10px] font-bold">ШАГ 1</p>
              <h3 className="mt-1 text-xs font-bold">Оставляете заявку</h3>
              <p className="mt-1 text-[9px] text-gray-400">Через сайт или Telegram</p>
            </div>
            <div className="rounded-lg border-t-4 border-[#d9d9d9] bg-[#f0f0f0] p-4">
              <p className="text-[10px] font-bold">ШАГ 2</p>
              <h3 className="mt-1 text-xs font-bold">Получаете расчет</h3>
              <p className="mt-1 text-[9px] text-gray-400">Под ваш объем и формат работы</p>
            </div>
            <div className="rounded-lg border-t-4 border-[#d9d9d9] bg-[#f0f0f0] p-4">
              <p className="text-[10px] font-bold">ШАГ 3</p>
              <h3 className="mt-1 text-xs font-bold">Подписываем договор</h3>
              <p className="mt-1 text-[9px] text-gray-400">Через ЭДО</p>
            </div>
            <div className="rounded-lg border-t-4 border-[#d9d9d9] bg-[#f0f0f0] p-4">
              <p className="text-[10px] font-bold">ШАГ 4</p>
              <h3 className="mt-1 text-xs font-bold">Принимаем товар</h3>
              <p className="mt-1 text-[9px] text-gray-400">От поставщика или транспортной компании</p>
            </div>
            <div className="rounded-lg border-t-4 border-[#d9d9d9] bg-[#f0f0f0] p-4">
              <p className="text-[10px] font-bold">ШАГ 5</p>
              <h3 className="mt-1 text-xs font-bold">Автоматизированная упаковка</h3>
              <p className="mt-1 text-[9px] text-gray-400">С видеоконтролем каждого этапа</p>
            </div>
            <div className="rounded-lg border-t-4 border-[#d9d9d9] bg-[#f0f0f0] p-4">
              <p className="text-[10px] font-bold">ШАГ 6</p>
              <h3 className="mt-1 text-xs font-bold">Отправляем</h3>
              <p className="mt-1 text-[9px] text-gray-400">На маркетплейсы по всей России</p>
            </div>
            <div className="rounded-lg border-t-4 border-[#d9d9d9] bg-[#f0f0f0] p-4">
              <p className="text-[10px] font-bold">ШАГ 7</p>
              <h3 className="mt-1 text-xs font-bold">Получаете результат</h3>
              <p className="mt-1 text-[9px] text-gray-400">Отчеты и прозрачную статистику</p>
            </div>
          </div>
        </div>
      </section>

      {/* Услуги фулфилмента */}
      <section id="services" className="bg-[#f8f8f8] px-5 py-12">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 text-center">
            <h2 className="text-xl font-bold">Услуги фулфилмента</h2>
            <p className="mt-2 text-xs">Полный цикл обработки товара от приемки до доставки.</p>
          </div>

          <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="min-h-28 rounded-lg border-t-4 border-[#25bfd0] bg-white p-4 shadow-md">
              <h3 className="text-xs font-bold">Приемка и сортировка</h3>
              <p className="mt-2 text-[9px] text-gray-400">Принимаем поставки любого объема и размещаем товар на адресное хранение.</p>
            </div>
            <div className="min-h-28 rounded-lg border-t-4 border-[#25bfd0] bg-white p-4">
              <h3 className="text-xs font-bold">Проверка на брак</h3>
              <p className="mt-2 text-[9px] text-gray-400">Контроль качества перед отправкой покупателю.</p>
            </div>
            <div className="min-h-28 rounded-lg border-t-4 border-[#25bfd0] bg-white p-4">
              <h3 className="text-xs font-bold">Автоматизированная упаковка</h3>
              <p className="mt-2 text-[9px] text-gray-400">Автоматические линии и видеоконтроль каждого заказа.</p>
            </div>
            <div className="min-h-28 rounded-lg border-t-4 border-[#25bfd0] bg-white p-4">
              <h3 className="text-xs font-bold">Сборка заказов</h3>
              <p className="mt-2 text-[9px] text-gray-400">Быстрая комплектация заказов по данным маркетплейсов.</p>
            </div>
            <div className="min-h-28 rounded-lg border-t-4 border-[#25bfd0] bg-white p-4">
              <h3 className="text-xs font-bold">Отправка на маркетплейсы</h3>
              <p className="mt-2 text-[9px] text-gray-400">FBO и FBS для всех крупных площадок.</p>
            </div>
            <div className="min-h-28 rounded-lg border-t-4 border-[#25bfd0] bg-white p-4">
              <h3 className="text-xs font-bold">Хранение товаров</h3>
              <p className="mt-2 text-[9px] text-gray-400">Безопасное адресное хранение продукции.</p>
            </div>
            <div className="min-h-28 rounded-lg border-t-4 border-[#25bfd0] bg-white p-4">
              <h3 className="text-xs font-bold">Интеграции</h3>
              <p className="mt-2 text-[9px] text-gray-400">Синхронизация с маркетплейсами и CRM.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Почему выбирают BOXPACK */}
      <section className="bg-[#1b2c53] px-5 py-10 text-white">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-7 text-center text-xl font-bold">Почему выбирают BOXPACK</h2>
          <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-md bg-[#304269] p-4">
              <h3 className="text-xs font-bold">Скорость</h3>
              <p className="mt-2 text-[10px]">До 20 000 товаров за смену и отправка день в день.</p>
            </div>
            <div className="rounded-md bg-[#304269] p-4">
              <h3 className="text-xs font-bold">Точность</h3>
              <p className="mt-2 text-[10px]">99.8% точность сборки благодаря автоматизации.</p>
            </div>
            <div className="rounded-md bg-[#304269] p-4">
              <h3 className="text-xs font-bold">Надежность</h3>
              <p className="mt-2 text-[10px]">Страхование товара и круглосуточный контроль.</p>
            </div>
            <div className="rounded-md bg-[#304269] p-4">
              <h3 className="text-xs font-bold">Поддержка</h3>
              <p className="mt-2 text-[10px]">Персональный менеджер и оперативная помощь.</p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
