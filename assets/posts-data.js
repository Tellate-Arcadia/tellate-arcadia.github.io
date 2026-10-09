// ブログ記事の一覧データ。新しい記事を追加するときは、この配列の先頭に1件追加してください。
//
// id       : posts/フォルダ内のファイル名（拡張子なし）。例えば "hello-world" なら posts/hello-world.html
// date     : 表示用の日付。書式は自由（例 "2026.03.10"）
// category : 一覧に出すタグ。例 "お知らせ" "制作日記" "雑記"
// title    : 記事タイトル
// excerpt  : 一覧に出す短い紹介文（1〜2文程度）
//
// 新しい記事を書く手順：
// 1. posts/_template.html をコピーして、posts/好きなファイル名.html として保存
// 2. コピーしたファイルの中の本文・タイトルを書き換える
// 3. この配列の先頭に、そのファイルに対応する1件を追加する
// これだけで、一覧ページに自動的に表示されます。

const BLOG_POSTS = [
    {
    id: 'ff14-recent-play',
    date: '2026.10.09',
    category: '雑記',
    title: 'ゲーム制作の合間に：最近のFF14プレイ状況',
    excerpt: '魔獣使いの特二盤、PvPのロケットパンチ、マウント集めにクラフター生活。制作の合間に遊んでいるFF14の近況をまとめました。'
  },

  {
    id: 'rakuen-release',
    date: '2026.10.07',
    category: 'お知らせ',
    title: '『楽園の残響』を公開しました',
    excerpt: '新作ファンタジーRPG『楽園の残響 ―彼方より継ぐもの―』をフリーゲーム夢現で公開しました。ブラウザですぐに遊べます。'
  },

　{
    id: 'rakuen-testing-and-spirit-trek-steam',
    date: '2026.10.02',
    category: '制作日記',
    title: '制作近況：『楽園の残響』は通しテスト中、Spirit TrekはSteam版を制作中です',
    excerpt: '『楽園の残響』は本編の実装が完了し、いまは通しテストの真っ最中です。Spirit Trekは霊域幻札をメインにしたSteam版の制作を進めています。'
  },

   {
    id: 'rakuen-announce',
    date: '2026.09.27',
    category: 'お知らせ',
    title: '新作『楽園の残響』の紹介ページを公開しました',
    excerpt: '制作中の新作ファンタジーRPG『楽園の残響』の紹介ページを追加しました。どんなゲームなのか、いまの進み具合、そしてSpirit Trek Ver2.0のお知らせも。'
  },

  {   
    id: 'sinsaku',
    date: '2026/9/4',
    category: '日記',
    title: '新作ゲーム制作中',
    excerpt: '思ったより時間かかってます'
  },  {   
    id: 'nikki1',
    date: '2026/8/17',
    category: '日記',
    title: '新作ゲームについて',
    excerpt: '時間をかけて作るつもりが・・・？'
  },
  {   
    id: 'newgame',
    date: '2026/8/15',
    category: 'お知らせ',
    title: '新作ゲーム考案中',
    excerpt: 'Spirit Trekの公開も終わったので'
  },
  {   
    id: 'koukai',
    date: '2026/8/13',
    category: 'お知らせ',
    title: 'Spirit Trek-精霊フィールド-が公開されました！',
    excerpt: '無事に公開！　よかったよかったっ'
  },
  {   
    id: 'koukaizyunbi',
    date: '2026/8/13',
    category: 'お知らせ',
    title: 'Spirit Trek-精霊フィールド-の公開準備中',
    excerpt: '初自作ゲーム・・・果たしてどうなる！？'
  },
  {   
    id: 'hello-world',
    date: '2026/8/12',
    category: 'お知らせ',
    title: 'ブログを開設しました',
    excerpt: 'ここには制作の記録や、ゲームと関係のない雑記も含めて、気の向くまま書いていく予定です。次の更新をお楽しみに。'
  },
];
