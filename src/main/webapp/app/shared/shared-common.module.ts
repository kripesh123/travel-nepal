import { NgModule } from '@angular/core';

import { TravelNepalSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [TravelNepalSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [TravelNepalSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class TravelNepalSharedCommonModule {}
