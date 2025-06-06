USE CBM_SOLICITUDES_INGRESO;

INSERT INTO producto (codigo_producto, descripcion, costo)
VALUES
  ('012345678905', 'Sassón - Condimento variado', 5.75),
  ('012345678912', 'Especias Escazú - Condimento natural', 6.25),
  ('012345678929', 'Los Patitos - Achiote tradicional', 4.50),
  ('012345678936', 'Cashitas - Snack de maíz', 3.95),
  ('012345678943', 'Al Gusto - Salsa criolla', 4.20),
  ('012345678950', 'De La Provincia - Miel natural', 7.60),
  ('012345678967', 'Harpp - Alimento premium para aves', 12.90),
  ('012345678974', 'Intercampo - Alimento para aves estándar', 9.40),
  ('012345678981', 'Molinera Foods - Aceite vegetal', 6.10),
  ('012345678998', 'Molinera Foods - Frijol negro seco', 3.80);

INSERT INTO cliente (codigo_cliente, nombre_cliente)
VALUES
  ('CL001', 'Supermercado La Esperanza'),
  ('CL002', 'Distribuidora El Buen Gusto'),
  ('CL003', 'Tienda Doña Marta'),
  ('CL004', 'Mini Market El Sol'),
  ('CL005', 'Abarrotería San Juan'),
  ('CL006', 'Comercial Los Amigos'),
  ('CL007', 'Colmado Las Delicias'),
  ('CL008', 'Super Bodega Central'),
  ('CL009', 'Despensa Familiar Mixco'),
  ('CL010', 'Tienda El Progreso');