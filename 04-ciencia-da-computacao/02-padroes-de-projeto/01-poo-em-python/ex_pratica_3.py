from abc import ABC, abstractmethod
from math import pi as PI


class GeometricFigure(ABC):
    @abstractmethod
    def area(self):
        raise NotImplementedError

    def perimeter(self):
        raise NotImplementedError


class Rectangle(GeometricFigure):
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def area(self):
        return self.width * self.height

    def perimeter(self):
        return 2 * (self.width + self.height)

    def __str__(self):
        return (
            f"{self.__class__.__name__}\n"
            f" width: {self.width}\n"
            f" height: {self.height}\n"
            f" permiter: {self.perimeter():.2f}\n"
            f" area: {self.area():.2f}"
        )


class Square(GeometricFigure):
    def __init__(self, side):
        self.side = side

    def area(self):
        return self.side**2

    def perimeter(self):
        return 4 * self.side

    def __str__(self):
        return (
            f"{self.__class__.__name__}\n"
            f" side: {self.side}\n"
            f" permiter: {self.perimeter():.2f}\n"
            f" area: {self.area():.2f}"
        )


class Circle(GeometricFigure):
    def __init__(self, radius):
        self.radius = radius

    def area(self):
        return PI * self.radius**2

    def perimeter(self):
        return 2 * PI * self.radius

    def __str__(self):
        return (
            f"{self.__class__.__name__}\n" 
            f" radius: {self.radius}\n"
            f" permiter: {self.perimeter():.2f}\n"
            f" area: {self.area():.2f}"
        )


circle = Circle(5)
square = Square(5)
rectangle = Rectangle(5, 10)

print(circle, square, rectangle, sep="\n")
