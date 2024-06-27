import { tesloApi } from '@/api/tesloApi';
import type { Product } from '../interfaces/product.interface';

export const createUpdateProductAction = async (product: Partial<Product>) => {
  const productId = product.id;
  const cleanProduct = cleanProductForCreateUpdate(product);

  if (productId && productId !== '') {
    // Actualizar producto.
    return await updateProduct(productId, cleanProduct);
  }

  // Crear producto
  return await createProduct(cleanProduct);
};

const cleanProductForCreateUpdate = (product: Partial<Product>) => {
  const images: string[] =
    product.images?.map((image) => {
      if (image.startsWith('http')) {
        const imageName = image.split('/').pop();
        return imageName ? image : '';
      }

      return image;
    }) ?? [];

  delete product.id;
  delete product.user;

  product.images = images;

  return product;
};

const updateProduct = async (productId: string, product: Partial<Product>) => {
  try {
    const { data } = await tesloApi.patch<Product>(`/products/${productId}`, product);
    return data;
  } catch (error) {
    console.log(error);
    throw new Error('No se pudo actualizar el producto');
  }
};

const createProduct = async (product: Partial<Product>) => {
  try {
    const { data } = await tesloApi.post<Product>(`/products`, product);
    return data;
  } catch (error) {
    console.log(error);
    throw new Error('No se pudo crear el producto');
  }
};
