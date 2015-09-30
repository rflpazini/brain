var app = app || {};

(function () {
	'use strict';

	app.TodoFooter = React.createClass({
		render: function () {
			var activeTodoWord = app.Utils.pluralize(this.props.count, 'tarefa');
			var ativa = app.Utils.pluralize(this.props.count, 'ativa');
			var clearButton = null;

			if (this.props.completedCount > 0) {
				clearButton = (
					<button
						className="clear-completed"
						onClick={this.props.onClearCompleted}>
						Clear completed
					</button>
				);
			}

			var cx = React.addons.classSet;
			var nowShowing = this.props.nowShowing;
			return (
				<footer className="footer">
					<span className="todo-count">
						<strong>{this.props.count}</strong> {activeTodoWord} {ativa}
					</span>
					<ul className="filters">
						<li>
							<a
								href="#/"
								className={cx({selected: nowShowing === app.ALL_TODOS})}>
									Todos
							</a>
						</li>
						{' '}
						<li>
							<a
								href="#/active"
								className={cx({selected: nowShowing === app.ACTIVE_TODOS})}>
									Itens para 
							</a>
						</li>
						{' '}
						<li>
							<a
								href="#/completed"
								className={cx({selected: nowShowing === app.COMPLETED_TODOS})}>
									Completed
							</a>
						</li>
					</ul>
					{clearButton}
				</footer
>			);
		}
	});
})();
