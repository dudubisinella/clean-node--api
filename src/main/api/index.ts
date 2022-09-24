import '../config/module-alias'
import { PersonController } from '@/application/controllers/person'

const p = new PersonController()
p.speak('rodrigo')
p.speak()
