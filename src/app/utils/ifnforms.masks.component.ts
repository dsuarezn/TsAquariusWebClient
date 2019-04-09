
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MatCheckboxModule, MatSelectModule} from '@angular/material';
import  createNumberMask  from 'text-mask-addons/dist/createNumberMask';

export class MaskComponent  {
    
      constructor() { 
            
      }
    
      ngOnInit() {
      }

      public horaMinutoMask = [/\d/, /\d/, '/', /\d/, /\d/];
      public phoneMask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

      public gradosDecimalesMask = createNumberMask({
            prefix: '',
            includeThousandsSeparator: false,
            allowDecimal: true,
            requireDecimal: true,
            allowLeadingZeroes: false,
            decimalLimit: 7,
            integerLimit:3,
            allowNegative: true
        })

        public mascara3Enteros0Decimales360Max = createNumberMask({
            prefix: '',
            suffix: '',
            includeThousandsSeparator: false,
            allowDecimal: false,
            requireDecimal: false,
            allowLeadingZeroes: false,
            decimalLimit: 0,
            integerLimit:3,
            allowNegative: true,
            maxValue: 360,
            minValue: 0
          })

      public mascara3Enteros0Decimales = createNumberMask({
            prefix: '',
            suffix: '',
            includeThousandsSeparator: false,
            allowDecimal: false,
            requireDecimal: false,
            allowLeadingZeroes: false,
            decimalLimit: 0,
            integerLimit:3,
            allowNegative: true,
            maxValue: 999,
            minValue: 0
          })

          public mascara3Enteros0DecimalesMax100 = createNumberMask({
            prefix: '',
            suffix: '',
            includeThousandsSeparator: false,
            allowDecimal: false,
            requireDecimal: false,
            allowLeadingZeroes: false,
            decimalLimit: 0,
            integerLimit:3,
            allowNegative: true,
            maxValue: 100,
            minValue: 0
          })
        
          public mascara3Enteros7Decimales = createNumberMask({
            prefix: '',
            includeThousandsSeparator: false,
            allowDecimal: true,
            requireDecimal: true,
            allowLeadingZeroes: false,
            decimalLimit: 7,
            integerLimit:3,
            allowNegative: true
        })
        
        public mascara3Enteros1Decimales = createNumberMask({
          prefix: '',
          suffix: '',
          includeThousandsSeparator: false,
          allowDecimal: true,
          requireDecimal: true,
          allowLeadingZeroes: false,
          decimalLimit: 1,
          integerLimit:3,
          allowNegative: true  
        })
        
        public mascara2Enteros1Decimales = createNumberMask({
          prefix: '',
          suffix: '',
          includeThousandsSeparator: false,
          allowDecimal: true,
          requireDecimal: true,
          allowLeadingZeroes: false,
          decimalLimit: 1,
          integerLimit:2,
          allowNegative: true  
        })
        
        public mascara2Enteros0Decimales = createNumberMask({
          prefix: '',
          suffix: '',
          includeThousandsSeparator: false,
          allowDecimal: true,
          requireDecimal: true,
          allowLeadingZeroes: false,
          decimalLimit: 0,
          integerLimit:2,
          allowNegative: true  
        })
}