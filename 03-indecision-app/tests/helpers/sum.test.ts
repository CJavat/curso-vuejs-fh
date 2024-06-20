// sum.test.js
import { describe, expect, test } from 'vitest';
import { sum, addArray } from '../../src/helpers/sum';

describe('Add Function', () => {
  test('adds 1 + 2 to equal 3', () => {

    // Preparación
    const a = 1;
    const b = 3;
  
    // Estímulo
    const result = sum(a, b);
  
    // Comportamiento esperado
    expect( result ).toBe( a + b );
  
    // if( sum( 1, 2 ) !== 3 ) {
    //   throw new Error('La suma no es correcta');
    // }
  });
});

describe('Add Array Function', () => {
  test('should return 0 if the array is empty', () => {
    // Preparación
    const arr = [];
  
    // Estímulo
    const result = addArray( arr );
  
    // Comportamiento esperado
    expect( result ).toBe( 0 );
  });
  
  test('should return the proper value of the addArray function', () => {
    // Preparación
    const numberArray = [1, 2, 3];
  
    // Estímulo
    const result = addArray( numberArray );
    
    // Comportamiento esperado
    expect( result ).toBe( 6 );
  });
});


