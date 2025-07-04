USE [CBM_SOLICITUDES_INGRESO]
GO
/****** Object:  View [dbo].[vw_estado_solicitud]    Script Date: 8/06/2025 13:42:52 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create view [dbo].[vw_estado_solicitud]
as
SELECT 
    se.codigo_solicitud,
    e.descripcion
FROM solicitud_encabezado se
JOIN estado e ON se.id_estado = e.id_estado
GO
/****** Object:  View [dbo].[vw_ingreso_producto]    Script Date: 8/06/2025 13:42:52 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create view [dbo].[vw_ingreso_producto]
AS
SELECT 
    p.codigo_producto,
    p.descripcion,
    CONVERT(DATE, se.fecha_creacion) AS fecha_ingreso
FROM producto p
JOIN solicitud_detalle sd ON p.id_producto = sd.id_producto
JOIN solicitud_encabezado se ON sd.id_solicitud_encabezado = se.id_solicitud_encabezado
GROUP BY p.codigo_producto, p.descripcion, CONVERT(DATE, se.fecha_creacion)
GO
/****** Object:  View [dbo].[vw_solicitudes_cliente]    Script Date: 8/06/2025 13:42:52 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create view [dbo].[vw_solicitudes_cliente]
AS
SELECT 
    c.codigo_cliente,
    c.nombre_cliente,
    COUNT(se.id_solicitud_encabezado) AS cantidad_solicitudes
FROM cliente c
LEFT JOIN solicitud_encabezado se ON c.id_cliente = se.id_cliente
GROUP BY c.codigo_cliente, c.nombre_cliente
GO
/****** Object:  View [dbo].[vw_solicitudes_dia]    Script Date: 8/06/2025 13:42:52 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE VIEW [dbo].[vw_solicitudes_dia]
AS
SELECT 
    CONVERT(DATE, fecha_creacion) AS fecha,
    COUNT(*) AS cantidad_solicitudes
FROM solicitud_encabezado
GROUP BY CONVERT(DATE, fecha_creacion)
GO
/****** Object:  View [dbo].[vw_ventas_cliente]    Script Date: 8/06/2025 13:42:52 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create view [dbo].[vw_ventas_cliente]
as
SELECT 
    c.codigo_cliente,
    c.nombre_cliente,
    SUM(sd.cantidad) AS total_productos
FROM cliente c
JOIN solicitud_encabezado se ON c.id_cliente = se.id_cliente
JOIN solicitud_detalle sd ON se.id_solicitud_encabezado = sd.id_solicitud_encabezado
GROUP BY c.codigo_cliente, c.nombre_cliente
GO
/****** Object:  StoredProcedure [dbo].[cliente_insert]    Script Date: 8/06/2025 13:42:52 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[cliente_insert]
@codigo_cliente varchar(20),
@nombre_cliente varchar(100)
AS
BEGIN
INSERT INTO cliente (codigo_cliente, nombre_cliente)
VALUES (@codigo_cliente, @nombre_cliente)
END
GO
/****** Object:  StoredProcedure [dbo].[cliente_select_all]    Script Date: 8/06/2025 13:42:52 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[cliente_select_all]
AS
BEGIN
SELECT
	id_cliente idCliente,
	codigo_cliente codigoCliente,
	nombre_cliente nombreCliente
FROM cliente;
END
GO
/****** Object:  StoredProcedure [dbo].[cliente_select_by_code]    Script Date: 8/06/2025 13:42:52 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE   PROCEDURE [dbo].[cliente_select_by_code]
@codigo_cliente VARCHAR(20)
AS
BEGIN
    SET NOCOUNT ON;

    SELECT IIF(EXISTS (SELECT 1 FROM cliente WHERE codigo_cliente = @codigo_cliente),1,0 ) AS [exists];
END;
GO
/****** Object:  StoredProcedure [dbo].[producto_insert]    Script Date: 8/06/2025 13:42:52 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[producto_insert]
@codigo_producto varchar(20),
@descripcion varchar(200),
@costo decimal(18,2)
AS
BEGIN
INSERT INTO producto (codigo_producto, descripcion, costo)
VALUES (@codigo_producto, @descripcion, @costo)
END
GO
/****** Object:  StoredProcedure [dbo].[producto_select_all]    Script Date: 8/06/2025 13:42:52 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[producto_select_all]
AS
BEGIN
SELECT
	id_producto idProducto,
	codigo_producto codigoProducto,
	descripcion descripcion,
	costo costo
FROM producto;
END
GO
/****** Object:  StoredProcedure [dbo].[producto_select_by_code]    Script Date: 8/06/2025 13:42:52 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[producto_select_by_code]
@codigo_producto VARCHAR(20)
AS
BEGIN
    SET NOCOUNT ON;

    SELECT IIF(EXISTS (SELECT 1 FROM producto WHERE codigo_producto = @codigo_producto),1,0 ) AS [exists];
END;
GO
/****** Object:  StoredProcedure [dbo].[reporte_estado_solicitud]    Script Date: 8/06/2025 13:42:52 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[reporte_estado_solicitud]
AS
BEGIN
	SELECT 
		codigo_solicitud requestCode,
		descripcion statusDescription
	FROM vw_estado_solicitud ORDER BY codigo_solicitud;
END;
GO
/****** Object:  StoredProcedure [dbo].[reporte_ingreso_producto]    Script Date: 8/06/2025 13:42:52 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[reporte_ingreso_producto]
AS
BEGIN
	SELECT
		codigo_producto productCode,
		descripcion [description],
		fecha_ingreso entryDate
	FROM vw_ingreso_producto ORDER BY codigo_producto, fecha_ingreso;
END;
GO
/****** Object:  StoredProcedure [dbo].[reporte_solicitud_cliente]    Script Date: 8/06/2025 13:42:52 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[reporte_solicitud_cliente]
AS
BEGIN
	SELECT
		codigo_cliente clientCode,
		nombre_cliente clientName,
		cantidad_solicitudes totalRequests
	FROM vw_solicitudes_cliente ORDER BY cantidad_solicitudes DESC;
END;
GO
/****** Object:  StoredProcedure [dbo].[reporte_solicitudes_dia]    Script Date: 8/06/2025 13:42:52 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[reporte_solicitudes_dia]
AS
BEGIN
	SELECT
		fecha date,
		cantidad_solicitudes totalRequests
	FROM vw_solicitudes_dia ORDER BY fecha;
END;
GO
/****** Object:  StoredProcedure [dbo].[reporte_ventas_cliente]    Script Date: 8/06/2025 13:42:52 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[reporte_ventas_cliente]
AS
BEGIN
	SELECT
	 codigo_cliente clientCode,
	 nombre_cliente clientName,
	 total_productos totalProducts
	FROM vw_ventas_cliente ORDER BY total_productos DESC;
END;
GO
/****** Object:  StoredProcedure [dbo].[solicitud_delete]    Script Date: 8/06/2025 13:42:52 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
  CREATE PROCEDURE [dbo].[solicitud_delete]
  @id_solicitud_encabezado INT
  AS
  BEGIN
	DELETE FROM solicitud_detalle where id_solicitud_encabezado = @id_solicitud_encabezado;
	DELETE FROM solicitud_encabezado where id_solicitud_encabezado = @id_solicitud_encabezado;
  END
GO
/****** Object:  StoredProcedure [dbo].[solicitud_detalle_insert]    Script Date: 8/06/2025 13:42:52 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[solicitud_detalle_insert]
    @id_solicitud_encabezado INT,
    @id_producto INT,
    @cantidad INT,
    @costo DECIMAL(18,2)
AS
BEGIN
    SET NOCOUNT ON;
    INSERT INTO solicitud_detalle (
        id_solicitud_encabezado,
        id_producto,
        cantidad,
        costo
    )
    VALUES (
        @id_solicitud_encabezado,
        @id_producto,
        @cantidad,
        @costo
    );
END
GO
/****** Object:  StoredProcedure [dbo].[solicitud_detalle_update]    Script Date: 8/06/2025 13:42:52 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

-- SP para actualizar el detalle de la solicitud
CREATE PROCEDURE [dbo].[solicitud_detalle_update]
    @id_solicitud_detalle INT,
    @id_producto INT,
    @cantidad INT,
    @costo DECIMAL(18,2)
AS
BEGIN
    UPDATE solicitud_detalle
    SET
        id_producto = @id_producto,
        cantidad = @cantidad,
        costo = @costo
    WHERE id_solicitud_detalle = @id_solicitud_detalle;
END
GO
/****** Object:  StoredProcedure [dbo].[solicitud_encabezado_insert]    Script Date: 8/06/2025 13:42:52 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[solicitud_encabezado_insert]
    @codigo_solicitud NVARCHAR(50),
    @id_cliente INT,
    @id_estado INT,
    @id_usuario INT
AS
BEGIN
    INSERT INTO solicitud_encabezado (
        codigo_solicitud,
        id_cliente,
        id_estado,
        fecha_actualizacion,
        id_usuario
    )
    VALUES (
        @codigo_solicitud,
        @id_cliente,
        @id_estado,
        GETDATE(),
        @id_usuario
    );

    SELECT SCOPE_IDENTITY() AS idSolicitudEncabezado;
END
GO
/****** Object:  StoredProcedure [dbo].[solicitud_encabezado_update]    Script Date: 8/06/2025 13:42:52 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[solicitud_encabezado_update]
    @id_solicitud_encabezado INT,
    @id_estado INT
AS
BEGIN
    UPDATE solicitud_encabezado
    SET
        id_estado = @id_estado,
        fecha_actualizacion = GETDATE()
    WHERE id_solicitud_encabezado = @id_solicitud_encabezado;
END
GO
/****** Object:  StoredProcedure [dbo].[solicitud_select_all]    Script Date: 8/06/2025 13:42:52 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE   PROCEDURE [dbo].[solicitud_select_all]
AS
BEGIN
	select 
	se.id_solicitud_encabezado idSolicitudEncabezado,
	codigo_solicitud codigoSolicitud,
	e.id_estado idEstado,
	e.descripcion estado,
	fecha_creacion fechaCreacion,
	fecha_actualizacion fechaActualizacion,
	sd.id_solicitud_detalle idSolicitudDetalle,
	p.id_producto idProducto,
	p.codigo_producto codigoProducto,
	p.descripcion producto,
	sd.cantidad cantidad,
	p.costo costoUnitario,
	sd.costo costoTotal
	from solicitud_encabezado se
	inner join solicitud_detalle sd ON
	se.id_solicitud_encabezado = sd.id_solicitud_encabezado
	inner join estado e ON
	se.id_estado = e.id_estado
	inner join producto p ON
	sd.id_producto = p.id_producto;
END
-- SELECT HASHBYTES('SHA2_256', '123');

GO
