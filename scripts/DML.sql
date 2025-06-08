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

  USE [CBM_SOLICITUDES_INGRESO]
GO
SET IDENTITY_INSERT [dbo].[estado] ON 
GO
INSERT [dbo].[estado] ([id_estado], [descripcion]) VALUES (2, N'Aprobada')
GO
INSERT [dbo].[estado] ([id_estado], [descripcion]) VALUES (8, N'Cancelada')
GO
INSERT [dbo].[estado] ([id_estado], [descripcion]) VALUES (6, N'Cerrada')
GO
INSERT [dbo].[estado] ([id_estado], [descripcion]) VALUES (3, N'En proceso de compra')
GO
INSERT [dbo].[estado] ([id_estado], [descripcion]) VALUES (1, N'Pendiente de aprobación')
GO
INSERT [dbo].[estado] ([id_estado], [descripcion]) VALUES (7, N'Rechazada')
GO
INSERT [dbo].[estado] ([id_estado], [descripcion]) VALUES (5, N'Recibida completamente')
GO
INSERT [dbo].[estado] ([id_estado], [descripcion]) VALUES (4, N'Recibida parcialmente')
GO
SET IDENTITY_INSERT [dbo].[estado] OFF
GO


DECLARE @i INT = 1;
DECLARE @fechaBase DATE = '2025-06-08';
DECLARE @diasRestar INT;
DECLARE @idSolicitud INT;
DECLARE @detalles INT;
DECLARE @j INT;
DECLARE @idProducto INT;
DECLARE @cantidad INT;
DECLARE @costo DECIMAL(10,2);

WHILE @i <= 10
BEGIN
    -- Restar entre 0 y 30 días a la fecha base
    SET @diasRestar = FLOOR(RAND() * 30);
    
    -- Insertar encabezado
    INSERT INTO [CBM_SOLICITUDES_INGRESO].[dbo].[solicitud_encabezado] (
        codigo_solicitud,
        fecha_creacion,
        id_cliente,
        id_estado,
        fecha_actualizacion,
        id_usuario
    ) VALUES (
        CONCAT('SOL-', FORMAT(GETDATE(), 'yyyyMMdd'), '-', @i),
        DATEADD(DAY, -@diasRestar, @fechaBase),
        FLOOR(RAND() * 10) + 1,  -- id_cliente entre 1 y 10
        1,                       -- id_estado
        GETDATE(),
        1                        -- id_usuario
    );

    -- Obtener el ID insertado
    SET @idSolicitud = SCOPE_IDENTITY();

    -- Insertar entre 1 y 10 detalles para este encabezado
    SET @detalles = FLOOR(RAND() * 10) + 1;
    SET @j = 1;

    WHILE @j <= @detalles
    BEGIN
        SET @idProducto = FLOOR(RAND() * 10) + 1;
        SET @cantidad = FLOOR(RAND() * 10) + 1;
        SET @costo = CAST(RAND() * 100 + 1 AS DECIMAL(10,2));

        INSERT INTO [CBM_SOLICITUDES_INGRESO].[dbo].[solicitud_detalle] (
            id_solicitud_encabezado,
            id_producto,
            cantidad,
            costo
        ) VALUES (
            @idSolicitud,
            @idProducto,
            @cantidad,
            @costo
        );

        SET @j = @j + 1;
    END

    SET @i = @i + 1;
END
