import { Routes } from '@angular/router';

import { InicioComponent } from '../../pages/inicio/inicio.component';
import { MiOrganizacionSocialComponent } from '../../pages/mi-organizacion-social/mi-organizacion-social.component';
import { GenerarSolicitudComponent } from '../../pages/generar-solicitud/generar-solicitud.component';

import { DatosdemiJuntaDirectivaComponent } from '../../pages/generar-solicitud/datos-jd/datos-jd.component';
import { DatosdeMiembrosComponent } from 'src/app/pages/generar-solicitud/datos-miembros/datos-miembros.component';
import { RDocumentosComponent } from 'src/app/pages/generar-solicitud/r-documentos/r-documentos.component';

import { MiPerfilComponent } from '../../pages/mi-perfil/mi-perfil.component';
import { FormPerfilComponent } from '../../pages/mi-perfil/form-perfil/form-perfil.component';
import { RequisitosComponent } from '../../pages/requisitos/requisitos.component';
import { OrganizacionesSocialesComponent } from '../../pages/organizaciones-sociales/organizaciones-sociales.component';
import { SolirechazosComponent } from '../../pages/solicitudes-rechazadas/solirechazos.component';
import { NexpedienteComponent } from '../../pages/nexpediente/nexpediente.component';
import { ValisoliComponent } from '../../pages/valisoli/valisoli.component';
import { GenresolucionComponent } from '../../pages/genresolucion/genresolucion.component';
import { MantenerParametroComponent } from 'src/app/pages/mantener-parametro/mantener-parametro.component';
import { AsignarRolesComponent } from 'src/app/pages/asignar-roles/asignar-roles.component';
import { MantenerPrivilegioComponent } from 'src/app/pages/mantener-privilegio/mantener-privilegio.component';
import { ListarsolisComponent } from 'src/app/pages/listarsolis/listarsolis.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'inicio', component: InicioComponent },
    { path: 'mi-perfil', component: MiPerfilComponent },
    { path: 'form-perfil', component: FormPerfilComponent },
    { path: 'mi-organizacion-social', component: MiOrganizacionSocialComponent },
    { path: 'generar-solicitud', component: GenerarSolicitudComponent },

    { path: 'datos-jd', component: DatosdemiJuntaDirectivaComponent },
    { path: 'datos-miembros', component: DatosdeMiembrosComponent },
    { path: 'r-documentos', component: RDocumentosComponent },
    { path: 'nexpediente', component: NexpedienteComponent },
    { path: 'valisoli', component: ValisoliComponent },

    { path: 'requisitos', component: RequisitosComponent },
    { path: 'organizaciones-sociales', component: OrganizacionesSocialesComponent },
    { path: 'solicitudes-rechazadas', component: SolirechazosComponent },
    { path: 'genresolucion', component: GenresolucionComponent },
    { path: 'mantener-parametro', component: MantenerParametroComponent },
    { path: 'asignar-roles', component: AsignarRolesComponent },
    { path: 'mantener-privilegio', component: MantenerPrivilegioComponent },
    { path: 'listarsolis',          component:ListarsolisComponent},


];
