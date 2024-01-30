---
author: coderpwh
pubDatetime: 2024-01-30T12:42:12.842Z
title: rust实现文本隐写库
slug: rust-impl-text-hidden
featured: true
ogImage: https://user-images.githubusercontent.com/53733092/215771435-25408246-2309-4f8b-a781-1f3d93bdf0ec.png
tags:
  - rust
  - text-hidden
description: rust实现文本隐写细节及要点
---

最近刷了一下github上面看到python实现的隐写工具库，觉得有趣，故晚上用rust实现了一下

## Table of contents

## 介绍

个人封装的，使用简单，自定义方便，符合rust哲学(不是)

### 项目依赖

考虑到简洁性，不引入其他库，纯rust实现，要自定义加密可以自行实现，已经开放了后门

### 用途

在通用的社交软件进行‘加密通话’，例如微信，qq等，娱乐用途

### 简单demo

```rust
fn main() {
  //加密方法
  let cipher = NoCipher;
  //文本水印摆放位置
  let pose = SimplePose::default();
  let text_hidden = TextHidden::new(cipher, pose, '\u{200B}', '\u{200C}');
  let th = text_hidden.text_hidden("hello", "key");
  println!("加密后:{}长度:{}!", th,th.len());
  let result = text_hidden.text_recover(th.as_str());
  let result_str = result.unwrap();
  println!("解密后:{}长度:{}", result_str, result_str.len());
}
```

## todo(画饼)

- 简易在线应用
- cli应用
- api接口应用
- gui应用

### 期望

各位大佬有时间的来个pr
