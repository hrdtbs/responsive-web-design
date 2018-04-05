# Responsive Web Design

* [Responsive Web Design](#responsive-web-design)
  * [レスポンシブ ウェブ デザインとは](#レスポンシブ-ウェブ-デザインとは)
  * [レスポンシブ ウェブ デザインの作り方](#レスポンシブ-ウェブ-デザインの作り方)
    * [HTML ファイルへの記述](#html-ファイルへの記述)
      * [ビューポート](#ビューポート)
    * [CSS の記述](#css-の記述)
      * [メディアクエリ](#メディアクエリ)
        * [簡単な例とその意味](#簡単な例とその意味)
        * [実例（１）](#実例１)
        * [実例（２）](#実例２)
  * [課題](#課題)

## レスポンシブ ウェブ デザインとは

PC やスマホといった幅広いデバイスのいずれに対しても、外観や操作方法が最適化されたウェブ サイトを制作するための方法のことです。

どういったものをレスポンシブ ウェブ デザインというのか、まずは実際にレスポンシブ ウェブ デザインを用いたウェブ ページの例を下記のリンクから見てみましょう。

[Responsive Web Design JP](http://responsive-jp.com/)

## レスポンシブ ウェブ デザインの作り方

HTML、CSS、Javascript、PHP など様々な言語を用いた手法がありますが以下では最も多く用いられている HTML と CSS による手法を紹介します。

### HTML ファイルへの記述

#### ビューポート

meta 要素に ビューポート (ブラウザの表示領域)について指定しましょう。

```html
<!DOCTYPE html>
<html lang='ja'>
<head>
    <meta charset='utf-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <title>...</title>
    ...
</head>
...
```

> `width=device-width`：ブラウザの表示領域の幅を端末の幅と等しく

> `initial-scale=1`：ブラウザが最初に表示されるときの倍率を等倍に

「上記 2 つを指定しないとどうなるか」は、試しに`width=540px`、`initial-scale=2`等と指定するとわかると思います。指定しない場合、これらの指定はブラウザ等に依存します。

### CSS の記述

#### メディアクエリ

メディアクエリとは、ブラウザの横幅・高さ・色などの情報を用いてスタイルシートの適用範囲を制御する構文 （記述方法）のことです。

##### 簡単な例とその意味

```css
/* ブラウザが500pxが以下であるとき*/
@media (max-width: 500px) {
  /* p要素の色は赤 */
  p {
    color: red;
  }
}
```

```css
/* ブラウザが500pxが以上であるとき*/
@media (min-width: 500px) {
  /* p要素の色は青 */
  p {
    color: blue;
  }
}
```

##### 実例（１）

実際に記述して試してください。

```html
<!DOCTYPE html>
<meta name='viewport' content='width=device-width, initial-scale=1.0'>

<style>
    .responsive-text::after {
        content: "553px以下";
    }

    @media (min-width: 544px) {
        .responsive-text:after {
            content: "554px以上";
        }
    }

    @media (min-width: 768px) {
        .responsive-text:after {
            content: "768px以上";
        }
    }

    @media (min-width: 992px) {
        .responsive-text:after {
            content: "992px以上";
        }
    }

    @media (min-width: 1200px) {
        .responsive-text:after {
            content: "1200px以上";
        }
    }
</style>

<p class="responsive-text">ブラウザの幅は</p>
```

> 正常に補完される場合に省略可能な要素(`html`,`body`など)は、可読性向上のため意図的に省略しています。

> `style`要素：内部に CSS を記述できる要素（つまり HTML ファイルに直接 CSS を埋め込める）

`@media (min-width: ---)`の`---`が昇順になるよう CSS を記述しなければいけないということに注意してください。

CSS では、同じセレクタで指定したものは後に書かれたものほど優先されるため、降順で記述した場合、最後に書いたものしか適応されません。

つまり上の例のメディアクエリは暗示的に次のようなものになっています。

```css
/* 543px以下であれば、553px以下と表示 */

@media (min-width: 544px) {
  /* 544pxから767pxまで、544px以上と表示*/
}

@media (min-width: 768px) {
  /* 768pxから991pxまで、768px以上と表示 */
}

@media (min-width: 992px) {
  /* 992pxから1199pxまで、992px以上と表示 */
}

@media (min-width: 1200px) {
  /* 1200px以上であれば、1200px以上と表示 */
}
```

##### 実例（２）

以下のリンクからダウンロードして、HTML ファイルをブラウザに表示してみてください。

[ダウンロードリンク](https://minhaskamal.github.io/DownGit/#/home?url=https://github.com/hrdtbs/responsive-web-design/tree/master/demos)

ブラウザの幅を変えるとレイアウトやデザインが切り替わります。

## 課題

[課題](./sample/)← を作成してください。
