module.exports = (sequelize: any, DataTypes: any) => {
	const Auto_Exp = sequelize.define(
		'Auto_Exp',
		{
			dog: {
				type: DataTypes.INTEGER,
				allowNull: false,
				defaultValue: 0,
			},
			cat: {
				type: DataTypes.INTEGER,
				allowNull: false,
				defaultValue: 0,
			},
			elephant: {
				type: DataTypes.INTEGER,
				allowNull: false,
				defaultValue: 0,
			},
			flower: {
				type: DataTypes.INTEGER,
				allowNull: false,
				defaultValue: 0,
			},
		},
		{
			timestamps: false,
			paranoid: false,
			tableName: 'Auto_Exp',
			charset: 'utf8mb4',
			collate: 'utf8mb4_general_ci',
		}
	);

	Auto_Exp.associate = (models: any) => {
		Auto_Exp.belongsTo(models.User, { foreignKey: 'user_idx', sourceKey: 'id' });
	};

	return Auto_Exp;
};
