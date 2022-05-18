module.exports = (sequelize: any, DataTypes: any) => {
	const Status = sequelize.define(
		'Status',
		{
			coding: {
				type: DataTypes.INTEGER,
				defaultValue: 0,
				allowNull: false,
			},
			hp: {
				type: DataTypes.INTEGER,
				defaultValue: 0,
				allowNull: false,
			},
			typing: {
				type: DataTypes.INTEGER,
				defaultValue: 0,
				allowNull: false,
			},
			luck: {
				type: DataTypes.INTEGER,
				defaultValue: 0,
				allowNull: false,
			},
			patience: {
				type: DataTypes.INTEGER,
				defaultValue: 0,
				allowNull: false,
			},
		},
		{
			timestamps: false,
			paranoid: false,
			tableName: 'Gauge',
			charset: 'utf8mb4',
			collate: 'utf8mb4_general_ci',
		}
	);

	Status.associate = (models: any) => {
		Status.belongsTo(models.User, { foreignKey: 'user_idx', sourceKey: 'id' });
	};

	return Status;
};
