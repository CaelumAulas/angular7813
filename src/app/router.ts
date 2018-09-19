import { RouterModule } from '@angular/router';

import { ListagemComponent } from './components/pages/listagem/listagem.component';
import { FormComponent } from './components/pages/form/form.component';

export const routerModuleConfigurado = RouterModule.forRoot([
  {
    path: '',
    component: ListagemComponent
  },
  {
    path: 'cadastro',
    component: FormComponent,
  },
  {
    path: 'editar/:idFoto',
    component: FormComponent,
  },
  {
    path: '**',
    redirectTo: ''
  }
]);
