# Tooltipの仕様

## デザイン

![alt text](image.png)

## 機能

| 番号 | パーツ名         | HTMLタグやコンポーネントなど | 機能                                                                                               |
| ---- | ---------------- | ---------------------------- | -------------------------------------------------------------------------------------------------- |
| 1    | ツールチップ本体 | div, popoverAPI              | <ul><li>マウスオーバーされた際に表示</li><li>マウスオーバーされない場合は非表示</li></ul>          |
| 2    | メッセージ       | span                         | <ul><li>propsでメッセージを受け取り表示</li><li>テキストが長い場合は横の最大幅で折り返す</li></ul> |

## index.vue

### props, emit

props

- 表示する文字列

### テスト観点

- 渡された文字列が画面に描画されていること
- マウスオーバーされたときにTooltipが表示されること
- マウスオーバーが外れたときにTooltipが表示されなくなること
