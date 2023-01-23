import { Injectable } from '@angular/core';
import * as tf from '@tensorflow/tfjs';
@Injectable({
  providedIn: 'root'
})
export class Ml1Service {



trainXs = tf.tensor2d(this.trainData.sizeMB, [20, 1]);
trainYs = tf.tensor2d(this.trainData.timeSec, [20, 1]);
testXs = tf.tensor2d(this.testData.sizeMB, [20, 1]);
testYs = tf.tensor2d(this.testData.timeSec, [20, 1]);
  constructor() { }
}
