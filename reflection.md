### 📙 Reflection — Inventory Tracker (TypeScript OOP)
This reflection explains the object‑oriented principles used in the Inventory Tracker project and how TypeScript supports them.

# 1. How TypeScript enforces type safety in this object-oriented program
TypeScript ensures that every object and method follows the correct type definitions.
In this project:

Each product class must match the structure of the base Product class.

The DiscountableProduct interface forces any implementing class to include applyDiscount() and getDiscountedPrice().

The compiler checks parameter types (e.g., numbers for price, weight, discount).

When calling methods like applyDiscount(), TypeScript warns if the object might not support them (e.g., DigitalProduct).

Errors appear at compile time instead of runtime, preventing bugs before execution.

Type safety makes the program more predictable and reduces accidental misuse of objects.

# 2. How inheritance reduced code duplication for PhysicalProduct and DigitalProduct
Both PhysicalProduct and DigitalProduct extend the base Product class.
This means:

Shared properties (sku, name, price) are defined once.

Shared methods (displayDetails(), getPriceWithTax()) are inherited automatically.

Only unique behavior (weight, file size, tax rules) is implemented in the subclasses.

Without inheritance, each class would need to rewrite the same logic.
With inheritance, the shared code lives in one place, making the project cleaner and easier to maintain.

# 3. Benefits of using encapsulation and access modifiers
Encapsulation protects the internal state of objects and controls how they are accessed.

In this project:

private discount ensures discounts can only be changed through applyDiscount(), preventing invalid values.

private weight prevents external code from modifying weight directly.

Public methods like displayDetails() provide a safe, controlled interface for interacting with product objects.

Encapsulation reduces bugs, keeps data consistent, and makes classes easier to reason about.

# 4. How polymorphism makes adding new product types easy
Polymorphism allows new product types to fit naturally into the system without changing existing code.

If we added a SubscriptionProduct:

It would extend Product, inheriting all shared properties.

It could override methods like getPriceWithTax() to apply subscription-specific rules.

It could implement DiscountableProduct if subscriptions support discounts.

Sorting functions (sortByPrice, sortByName) would work automatically because they operate on the base Product type.

Polymorphism makes the system flexible and future-proof — new product types can be added with minimal changes.