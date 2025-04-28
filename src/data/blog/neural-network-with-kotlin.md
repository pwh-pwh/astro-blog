---
author: coderpwh
pubDatetime: 2024-02-23T08:02:00.827Z
title: kotlin实现简易神经网络入门
slug: neural-network-with-kotlin
featured: false
draft: false
tags:
  - Neural-Network
  - Kotlin
description: "使用kotlin实现简单神经网络入门案例."
---

偶然刷到一篇关于神经网络的文章，刚好是入门的内容，所以就看下来了。收获很大，就补充了相关资料，并用kotlin简单写了个案例，现在在这里记录一下。

## Table of contents

## 神经网络介绍

首先声明不是生物上面的神经网络，如何因为是这个原因进来的请绕道。机器学习的神经网络用我的大白话讲有点类似将数据处理类似人类的神经元一样，
信息经过不同神经元处理得到最终结果，从数学角度有点类似用计算的方式拟合和结果集相类似的函数。
看看gpt的介绍

> 神经网络是一种计算模型，灵感来自人类神经系统的结构和功能。它是深度学习的基础，用于解决各种任务，包括图像识别、语音识别、自然语言处理等。 神经网络由神经元（也称为节点或单元）组成，这些神经元通过连接（权重）相互连接。整个网络被分为输入层、隐藏层和输出层。

## 结构介绍

    输入层（Input Layer）： 接受原始数据输入，例如图像像素、文本词向量等。

    隐藏层（Hidden Layer）： 位于输入层和输出层之间，负责处理输入数据并提取特征。神经网络的深度就是隐藏层的层数，深度学习通常包含多个隐藏层。

    输出层（Output Layer）： 生成最终的预测结果。输出层的节点数通常取决于具体任务，例如二分类问题有一个节点，多分类问题有多个节点。

    每个连接都有一个权重，代表神经元之间信息传递的强度。神经网络的学习过程就是通过反向传播算法调整权重，使网络能够更好地拟合训练数据，从而提高对新数据的泛化能力。

    神经网络的训练通常包括以下步骤：

    前向传播（Forward Propagation）： 输入数据通过网络，计算输出。
    计算损失（Compute Loss）： 通过比较模型输出与实际标签之间的差异来计算损失。
    反向传播（Backward Propagation）： 通过反向传播误差，调整权重以最小化损失。
    优化器更新权重（Optimizer Updates）： 使用优化算法（如梯度下降）更新权重，降低损失。

## 简单案例

### 案例说明

该案例非常简单，仅用于预测给出的两个小数的和是否大于等于1 也就是 a b -> a+b >=1

### kotlin实现

代码实现及注释

```kotlin
/**
 * @Auther: coderpwh
 * @Date: 2024/2/22 16:25
 * @Description:
 */
/**
 *
 * @param weights 权重
 * @param bias 偏置
 * @param learningRate 学习率
 */
class NeuralNetwork(
    val weights: DoubleArray = doubleArrayOf(Random.nextDouble(), Random.nextDouble()),
    var bias: Double = Random.nextDouble(),
    val learningRate: Double = 0.1
) {

    // 训练模型
    fun train(inputs: List<DoubleArray>, outputs: List<Int>, epoch: Int) = repeat(epoch) {
        assert(inputs.size == outputs.size)
        inputs.zip(outputs).forEach { (input, output) ->
            // 前向传播
            val prediction = predict(input)
            // 计算损失
            val error = output - prediction
            // 反向传播更新权重和偏置
            weights.indices.forEach { i ->
                weights[i] += error * input[i] * learningRate * prediction.derivative()
            }
            bias += error * learningRate * prediction.derivative()
        }
    }

    // 使用训练好的模型进行预测
    fun predict(input: DoubleArray) =
        (input.zip(weights).sumOf { (inputValue, weight) -> inputValue * weight } + bias).sigmoid()
}

// sigmoid激活函数
inline fun Double.sigmoid() = 1.0 / (1.0 + exp(-this))


inline fun Double.derivative() = this * (1.0 - this)

fun main() {
    // 训练数据
    val inputs = List(200) { doubleArrayOf(Random.nextDouble(), Random.nextDouble()) }
    val outputs = inputs.map {
        if ((it[0] + it[1]) >= 1) 1 else 0
    }
    val network = NeuralNetwork()
    network.train(inputs, outputs, 200)
    val testInput = List(50) { doubleArrayOf(Random.nextDouble(), Random.nextDouble()) }
    var count = 0
    var sucNum = 0
    testInput.forEach {
        val result = network.predict(it)
        val expect = if ((it[0] + it[1]) >= 1) 1 else 0
        // 是否正确
        val isCorrect = expect == if (result >= 0.5) 1 else 0
        count++
        if (isCorrect) sucNum++
        println("预测数据: ${it[0]},${it[1]},预测结果：${result} 是否正确:  ${isCorrect}")
    }
    println("预测准确率: ${sucNum * 1.0 / count}")
}
```
