USE CBM_SOLICITUDES_INGRESO;
GO

CREATE TABLE cliente (
    id_cliente INT PRIMARY KEY IDENTITY(1,1),
    codigo_cliente VARCHAR(20) UNIQUE NOT NULL,
    nombre_cliente VARCHAR(100) NOT NULL
);
GO

CREATE TABLE usuario (
    id_usuario INT PRIMARY KEY IDENTITY(1,1),
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    correo VARCHAR(100) NOT NULL,
    usuario VARCHAR(50) NOT NULL UNIQUE,
    clave VARCHAR(500) NOT NULL
);
GO

CREATE TABLE producto (
    id_producto INT PRIMARY KEY IDENTITY(1,1),
    codigo_producto VARCHAR(20) UNIQUE NOT NULL,
    descripcion VARCHAR(200) NOT NULL,
    costo DECIMAL(18,2) NOT NULL
);
GO

CREATE TABLE estado (
	id_estado INT PRIMARY KEY IDENTITY(1,1),
    descripcion VARCHAR(50) UNIQUE NOT NULL,
);

CREATE TABLE solicitud_encabezado (
    id_solicitud_encabezado INT PRIMARY KEY IDENTITY(1,1),
    codigo_solicitud VARCHAR(20) UNIQUE NOT NULL,
    fecha_creacion DATETIME NOT NULL DEFAULT GETDATE(),
    id_cliente INT NOT NULL,
    id_estado INT NOT NULL,
    fecha_actualizacion DATETIME NULL,
    id_usuario INT NOT NULL,

    CONSTRAINT FK_solicitud_cliente FOREIGN KEY (id_cliente) REFERENCES cliente(id_cliente),
    CONSTRAINT FK_solicitud_usuario FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario),
	CONSTRAINT FK_solicitud_estado FOREIGN KEY (id_estado) REFERENCES estado(id_estado)
);
GO

-- Tabla: solicitud_detalle
CREATE TABLE solicitud_detalle (
    id_solicitud_detalle INT PRIMARY KEY IDENTITY(1,1),
    id_solicitud_encabezado INT NOT NULL,
    id_producto INT NOT NULL,
    cantidad INT NOT NULL CHECK (cantidad > 0),
    costo DECIMAL(18,2) NOT NULL,

    CONSTRAINT FK_detalle_encabezado FOREIGN KEY (id_solicitud_encabezado) REFERENCES solicitud_encabezado(id_solicitud_encabezado),
    CONSTRAINT FK_detalle_producto FOREIGN KEY (id_producto) REFERENCES producto(id_producto)
);
GO


CREATE INDEX IDX_cliente_codigo ON cliente(codigo_cliente);
CREATE INDEX IDX_producto_codigo ON producto(codigo_producto);

CREATE INDEX IDX_encabezado_fecha ON solicitud_encabezado(fecha_creacion);
CREATE INDEX IDX_encabezado_estado ON solicitud_encabezado(id_estado);
CREATE INDEX IDX_detalle_encabezado ON solicitud_detalle(id_solicitud_encabezado);