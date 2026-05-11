import { InputCard } from './cards/InputCard'
import { TextareaCard } from './cards/TextareaCard'
import { SelectCard } from './cards/SelectCard'
import { SearchInputCard } from './cards/SearchInputCard'
import { DateInputCard } from './cards/DateInputCard'
import { SliderCard } from './cards/SliderCard'
import { SwitchCard } from './cards/SwitchCard'
import { CheckboxCard } from './cards/CheckboxCard'
import { RadioCard } from './cards/RadioCard'
import { TagInputCard } from './cards/TagInputCard'
import { CommandSearchCard } from './cards/CommandSearchCard'

export const formsCardsData = [
  { id: 'input', title: 'Input', description: 'Campo base com tipo, placeholder, disabled e error.', Card: InputCard },
  { id: 'textarea', title: 'Textarea', description: 'Campo para textos longos com placeholder e disabled.', Card: TextareaCard },
  { id: 'select', title: 'Select', description: 'Selecao com options, valor atual e disabled.', Card: SelectCard },
  { id: 'search-input', title: 'SearchInput', description: 'Busca command-first com placeholder e disabled.', Card: SearchInputCard },
  { id: 'date-input', title: 'DateInput', description: 'Campo de data com placeholder e disabled.', Card: DateInputCard },
  { id: 'slider', title: 'Slider', description: 'Controle com value, min, max, step e disabled.', Card: SliderCard },
  { id: 'switch', title: 'Switch', description: 'Toggle com checked e disabled locais.', Card: SwitchCard },
  { id: 'checkbox', title: 'Checkbox', description: 'Selecao binaria com checked e disabled.', Card: CheckboxCard },
  { id: 'radio', title: 'Radio', description: 'Escolha unica com selected e disabled.', Card: RadioCard },
  { id: 'tag-input', title: 'TagInput', description: 'Preview de tags com draft local e adiciona novos itens.', Card: TagInputCard },
  { id: 'command-search', title: 'CommandSearch', description: 'Bloco visual command-first com label e shortcut editaveis.', Card: CommandSearchCard },
]
