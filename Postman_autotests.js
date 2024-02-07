// autotest for method api.hh.ru/employers/732937

pm.test("Ожидаю код ответа 201", function () {
		pm.response.to.have.status(201);
	});
							
pm.test("Имя не может быть пустым", function() {
	pm.expect(pm.response.json().name).to.not.be.null
});

pm.test("Ожидаю время отклика 50ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(50);
});
