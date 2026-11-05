const pool = require('../config/db');

// GET: Listar todos los productos
const obtenerProductos = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM productos');
        res.status(200).json(rows);
    } catch (error) {
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

// POST: Crear un nuevo producto
const crearProducto = async (req, res) => {
    try {
        const { nombre, precio, stock } = req.body;
        if (!nombre || precio === undefined || stock === undefined) {
            return res.status(400).json({ error: 'Faltan campos obligatorios' });
        }
        const [result] = await pool.execute(
            'INSERT INTO productos (nombre, precio, stock) VALUES (?, ?, ?)',
            [nombre, precio, stock]
        );
        res.status(201).json({ id: result.insertId, nombre, precio, stock });
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el producto' });
    }
};

// PUT: Actualizar un producto existente
const actualizarProducto = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, precio, stock } = req.body;
        if (!nombre || precio === undefined || stock === undefined) {
            return res.status(400).json({ error: 'Faltan campos obligatorios' });
        }
        const [result] = await pool.execute(
            'UPDATE productos SET nombre = ?, precio = ?, stock = ? WHERE id = ?',
            [nombre, precio, stock, id]
        );
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }
        res.status(200).json({ mensaje: 'Producto actualizado correctamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el producto' });
    }
};

// DELETE: Eliminar un producto
const eliminarProducto = async (req, res) => {
    try {
        const { id } = req.params;
        const [result] = await pool.execute('DELETE FROM productos WHERE id = ?', [id]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }
        res.status(200).json({ mensaje: 'Producto eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el producto' });
    }
};

module.exports = { obtenerProductos, crearProducto, actualizarProducto, eliminarProducto };