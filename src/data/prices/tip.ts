// Tıp, diş hekimliği ve eczacılık ücret sayfaları (kind: 'tip'). İçerik tip-*.ts dosyalarındadır.
import type { PricePage } from './types'
import { tipOrtaAvrupaPrices } from './tip-orta-avrupa'
import { tipItalyaCekyaPrices } from './tip-italya-cekya'

export const tipPrices: PricePage[] = [...tipOrtaAvrupaPrices, ...tipItalyaCekyaPrices]
