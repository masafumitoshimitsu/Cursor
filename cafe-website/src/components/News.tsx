import React from 'react';

const News: React.FC = () => {
  const newsItems = [
    {
      id: 1,
      date: '2024.01.15',
      title: '新メニュー「季節のフルーツタルト」が登場しました',
      category: 'メニュー'
    },
    {
      id: 2,
      date: '2024.01.10',
      title: '年末年始の営業時間についてのお知らせ',
      category: 'お知らせ'
    },
    {
      id: 3,
      date: '2024.01.05',
      title: 'コーヒー豆の販売を開始いたします',
      category: 'サービス'
    },
    {
      id: 4,
      date: '2023.12.28',
      title: 'Wi-Fi環境を改善いたしました',
      category: '設備'
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'メニュー':
        return 'bg-cafe-brown text-white';
      case 'お知らせ':
        return 'bg-cafe-light-brown text-cafe-dark-brown';
      case 'サービス':
        return 'bg-cafe-beige text-cafe-dark-brown';
      default:
        return 'bg-gray-200 text-gray-700';
    }
  };

  return (
    <section id="news" className="py-20 bg-cafe-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-cafe-dark-brown mb-4 font-japanese">
            お知らせ
          </h2>
          <p className="text-lg text-gray-600">
            最新のニュースやイベント情報をお届けします
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="divide-y divide-gray-200">
            {newsItems.map((item) => (
              <div
                key={item.id}
                className="p-6 hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-2">
                      <span className="text-cafe-brown font-medium text-sm">
                        {item.date}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>
                        {item.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 hover:text-cafe-brown transition-colors duration-200">
                      {item.title}
                    </h3>
                  </div>
                  <div className="ml-4">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <button className="bg-cafe-brown hover:bg-cafe-dark-brown text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
            すべてのお知らせを見る
          </button>
        </div>
      </div>
    </section>
  );
};

export default News;