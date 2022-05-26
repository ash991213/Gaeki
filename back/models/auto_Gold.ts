module.exports = (sequelize: any, DataTypes: any) => {
	const Auto_Gold = sequelize.define(
		'Auto_Gold',
		{
			pc: {
				type: DataTypes.INTEGER,
				allowNull: false,
				defaultValue: 0,
			},
			desk: {
				type: DataTypes.INTEGER,
				allowNull: false,
				defaultValue: 0,
			},
			chair: {
				type: DataTypes.INTEGER,
				allowNull: false,
				defaultValue: 0,
			},
			cheer: {
				type: DataTypes.INTEGER,
				allowNull: false,
				defaultValue: 0,
			},
			cook: {
				type: DataTypes.INTEGER,
				allowNull: false,
				defaultValue: 0,
			},
			homekeeper: {
				type: DataTypes.INTEGER,
				allowNull: false,
				defaultValue: 0,
			},
			vehicle: {
				type: DataTypes.INTEGER,
				allowNull: false,
				defaultValue: 0,
			},
			user_idx: {
				type: DataTypes.INTEGER,
				defaultValue: 0,
				allowNull: false,
			},
		},
		{
			timestamps: false,
			paranoid: false,
			tableName: 'Auto_Gold',
			charset: 'utf8mb4',
			collate: 'utf8mb4_general_ci',
		}
	);

	Auto_Gold.associate = (models: any) => {
		Auto_Gold.belongsTo(models.User, { foreignKey: 'user_idx', sourceKey: 'id' });
	};

	return Auto_Gold;
};
