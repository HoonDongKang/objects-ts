import { Money } from '../../money/Money'
import { Customer } from './Customer'
import { Movie } from './Movie'
import { AmountDiscountPolicy } from './pricing/AmountDiscountPolicy'
import { PeriodCondition } from './pricing/PeriodCondition'
import { SequenceCondition } from './pricing/SequenceCondition'

const customer = new Customer('kang', 'donghoon')
const avatar = new Movie(
  'Avatar',
  120,
  Money.wons(10000),
  new AmountDiscountPolicy(Money.wons(800), [
    new PeriodCondition('월', new Date('2023-10-11'), new Date('2023-10-13')),
    new SequenceCondition(10),
  ])
)

console.log(avatar)
