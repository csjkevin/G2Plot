import { Options, StyleAttr } from '../../types';

export interface ViolinOptions extends Options {
  /** X 轴映射 */
  readonly xField: string;
  /** Y 轴映射 */
  readonly yField: string;
  /** 拆分字段映射，默认是分组情况，颜色作为视觉通道 */
  readonly seriesField?: string;
  /**
   * 小提琴的形状。
   * 默认: 非平滑、实心
   * smooth: 平滑
   * hollow: 空心
   * hollow-smooth: 平滑、空心
   */
  readonly shape?: 'smooth' | 'hollow' | 'hollow-smooth';
  /** 小提琴样式配置，可选 */
  readonly violinStyle?: StyleAttr;
  /** 核函数配置，当前只支持三角核 */
  readonly kde?: {
    /** 三角波类型 */
    type: 'triangular';
    /** 最小值，默认为数据中的最小值减去一个固定的阈值。 */
    min?: number;
    /** 最大值，默认为数据中的最大值加上一个固定的阈值。 */
    max?: number;
    /** 采样数量，越大轮廓线越接近真实概率分布函数，默认32。 */
    sampleSize?: number;
    /** 核函数的带宽。带宽越大产生的曲线越平滑（越模糊），带宽越小产生的曲线越陡峭。默认3。 */
    width?: number;
  } /* | { type: 'gaussian', } ⬅️ 像这样添加新的核函数支持 */;
  /** 内部箱线图配置，false 为不显示。 */
  readonly box?:
    | false
    | {
        /** 箱线图的文案映射 */
        textMap?: {
          /** 最大值文案 */
          max: string;
          /** 最小值文案 */
          min: string;
          /** 下四分位数文案 */
          q1: string;
          /** 上四分位数文案 */
          q3: string;
          /** 中位数文案 */
          median: string;
        };
      };
}
