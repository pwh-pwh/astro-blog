---
title: 有限状态机简要使用
author: coderpwh
pubDatetime: 2024-02-18T09:37:51.521Z
slug: use-finite-state-machine
featured: false
draft: false
tags:
  - Kotlin
  - Finite-State-Machine
  - AdventOfCode
description: "有限状态机简单题目案例."
---

> 在使用kotlin刷adventofcode的时候遇到一道简单的关于有限状态机的题目，很久没有接触了，故记录一下.

相信有接触过编译原理的多多少少对有限状态机有过了解，当在实际应用中比较少，而它的思想又比较重要，不只是一种数学模型。。。

## Table of contents

## 介绍

有限状态机多用于对对象行为进行建模，说白了和人的一生差不多，How to choose很重要，人的一系列行为选择会导致或者发生结果。以下是对比人的建模

- 状态：人的某些现状或者条件，如 长得帅，缺钱，会编程
- 事件：人的某些行为或者做法，如 表白，借钱，找it工作
- 动作：人的行为或者做法在某些条件下发生的动作， 如 表白失败再次成为单身贵族，借钱投资发财，找到工作
- 变换：条件满足后，人的新状态， 如 负翁，单身贵族

## 具体应用

### 题目详情

Space on the sleigh is limited this year, and so Santa will be bringing his list as a digital copy. He needs to know how much space it will take up when stored.

It is common in many programming languages to provide a way to escape special characters in strings. For example, C, JavaScript, Perl, Python, and even PHP handle special characters in very similar ways.

However, it is important to realize the difference between the number of characters in the code representation of the string literal and the number of characters in the in-memory string itself.

For example:

    "" is 2 characters of code (the two double quotes), but the string contains zero characters.
    "abc" is 5 characters of code, but 3 characters in the string data.
    "aaa\"aaa" is 10 characters of code, but the string itself contains six "a" characters and a single, escaped quote character, for a total of 7 characters in the string data.
    "\x27" is 6 characters of code, but the string itself contains just one - an apostrophe ('), escaped using hexadecimal notation.

Santa's list is a file that contains many double-quoted string literals, one on each line. The only escape sequences used are \\ (which represents a single backslash), \" (which represents a lone double-quote character), and \x plus two hexadecimal characters (which represents a single character with that ASCII code).

Disregarding the whitespace in the file, what is the number of characters of code for string literals minus the number of characters in memory for the values of the strings in total for the entire file?

For example, given the four strings above, the total number of characters of string code (2 + 5 + 10 + 6 = 23) minus the total number of characters in memory for string values (0 + 3 + 7 + 1 = 11) is 23 - 11 = 12.

### 解题代码

```kotlin
fun main() {

    val result = File("src/y2015/day8/day8.txt").readLines()
        .sumOf {
            var count = it.strMemoryLen()
            it.length - count + 2
        }
    println(result)
}

private fun String.strMemoryLen():Int {
    var count = 0
    val iterator = this.iterator()
    var state = State.START
    while (iterator.hasNext()) {
        val c = iterator.next()
        state = when (state) {
            State.START -> {
                if (c == '\\') {
                    State.FIRSTL
                } else {
                    count++
                    State.START
                }
            }
            State.FIRSTL -> {
                if (c == 'x') {
                    State.X
                } else {
                    count++
                    State.START
                }
            }
            State.X -> {
                iterator.next()
                count++
                State.START
            }
        }
    }
    return count
}

private enum class State {
    START,FIRSTL,X
}
```

### 解题思路

定义State枚举用于表示可能的状态，开始状态，第一个\号状态，\号带x状态，
之后获取迭代器，判断字符，进行相应动作，状态转换即可
